import { useEffect, useState } from 'react';

const Toast = ({ message, type, show, setShow }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (show) {
      setAnimateIn(true);
      setTimeout(() => {
        setAnimateIn(false);
      }, 300); // Duration of the animation in milliseconds
    }
  }, [show]);

  const getTypeClasses = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-gray-800';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const toastClasses = `fixed top-10 p-4 rounded-md shadow-lg transition-opacity duration-300 flex ${getTypeClasses()} ${
    animateIn ? 'animate-toast-in' : ''
  }`;

  const dismissToast = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className={toastClasses}>
          <p className="mr-4">{message}</p>
          <svg
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={dismissToast}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )}
    </>
  );
};

export default Toast;
