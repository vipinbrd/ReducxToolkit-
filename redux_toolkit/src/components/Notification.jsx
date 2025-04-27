export function Notification({message}) {
    // const notification = "Data sent successfully!";
  
    return (
      <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
        <h1 className="text-lg font-semibold">{message}</h1>
      </div>
    );
  }
  