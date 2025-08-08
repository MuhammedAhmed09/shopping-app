import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center p-14'>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{
        color: '#fff',
        background: '#007bff',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '20px'
      }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
