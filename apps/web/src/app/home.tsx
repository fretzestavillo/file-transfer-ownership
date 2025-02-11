import { useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();
  const token = location.state?.accessToken;
  const fileId = import.meta.env.VITE_FILE_ID;
  const permmissionId = import.meta.env.VITE_PERMISSION_ID;
  //   const newEmailOwner = import.meta.env.VITE_NEW_EMAIL_OWNER;

  async function getPermissions() {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching permissions:', errorData);
        throw new Error(
          `Failed to get permissions: ${
            errorData.error?.message || response.statusText
          }`
        );
      }

      const data = await response.json();
      console.log('Permissions data:', data.permissions[0]); // Log the fetched permissions data
      console.log('Permissions data:', data.permissions[1]); // Log the fetched permissions data
      return data.permissions;
    } catch (error) {
      console.error('Error fetching permissions:', error);
    }
  }

  async function requestOwnershipTransfer() {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}/permissions/${permmissionId}`;

    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'writer', // Ensure the role is writer
          pendingOwner: true, // Request the transfer
          //   emailAddress: newEmailOwner, // New owner's email
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to request ownership transfer: ${
            errorData.error?.message || response.statusText
          }`
        );
      }

      const data = await response.json();

      // Step 2: After the new owner accepts the transfer, you can update the role to 'owner'
      console.log(
        'Ownership transfer request sent successfully and it is now pending, new owner should be accept the request'
      );
    } catch (error) {
      console.error('Error requesting ownership transfer:', error);
    }
  }

  return (
    <div>
      <h1>Welcome Home</h1>

      <button onClick={getPermissions}>Get Id</button>
      <button onClick={requestOwnershipTransfer}>
        requestOwnershipTransfer
      </button>
    </div>
  );
}
