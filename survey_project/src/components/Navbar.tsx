
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   return (
//     <nav style={{ padding: '10px', background: '#eee' }}>
//       <Link to="/" style={{ marginRight: '10px' }}>home</Link>
//       <Link to="/login" style={{ marginRight: '10px' }}>login</Link>
//       <Link to="/surveys" style={{ marginRight: '10px' }}>surveys</Link>
//       <Link to="/personalArea" style={{ marginRight: '10px' }}>peraonal area</Link>
//     </nav>
//   );
// };

// export default Navbar;
















// import { AppBar, Toolbar, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const Navbar: React.FC = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#1976d2', height: '80px' }}>
//       <Toolbar sx={{ justifyContent: 'center', height: '100%' }}>
//         <Box sx={{ display: 'flex', gap: 3 }}>
//           <Button
//             component={Link}
//             to="/"
//             color="inherit"
//             sx={{ fontSize: '1.2rem', textTransform: 'none' }}
//           >
//             Home
//           </Button>
//           <Button
//             component={Link}
//             to="/login"
//             color="inherit"
//             sx={{ fontSize: '1.2rem', textTransform: 'none' }}
//           >
//             Login
//           </Button>
//           <Button
//             component={Link}
//             to="/surveys"
//             color="inherit"
//             sx={{ fontSize: '1.2rem', textTransform: 'none' }}
//           >
//             Surveys
//           </Button>
//           <Button
//             component={Link}
//             to="/personalArea"
//             color="inherit"
//             sx={{ fontSize: '1.2rem', textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1 }}
//           >
//             <AccountCircleIcon />
//             Personal Area
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

















import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Login', to: '/login' },
    { label: 'Surveys', to: '/surveys' },
    { label: 'Personal Area', to: '/personalArea', icon: <AccountCircleIcon /> },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', height: '80px' }}>
      <Toolbar sx={{ justifyContent: 'center', height: '100%' }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {navItems.map(({ label, to, icon }) => {
            const isActive = location.pathname === to;

            return (
              <Button
                key={to}
                component={Link}
                to={to}
                color="inherit"
                sx={{
                  fontSize: '1.2rem',
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: icon ? 1 : 0,
                  borderBottom: isActive ? '3px solid #fff' : 'none',
                  fontWeight: isActive ? 'bold' : 'normal',
                }}
              >
                {icon}
                {label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

