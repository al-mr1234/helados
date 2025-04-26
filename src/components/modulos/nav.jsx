    import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import Menu from '@mui/material/Menu';
    import MenuIcon from '@mui/icons-material/Menu';
    import Container from '@mui/material/Container';
    import Avatar from '@mui/material/Avatar';
    import Button from '@mui/material/Button';
    import Tooltip from '@mui/material/Tooltip';
    import MenuItem from '@mui/material/MenuItem';
    import Logok from '../../estilos/img/Logo-AlKeem.png';
    import { Link } from 'react-router-dom'; // Importa Link
    // segúrate de que la ruta sea correcta

    const pages = [
    { name: 'Inicio', path: '/Home' },
    { name: 'Helados', path: '/Productos' },
    { name: 'Sabores', path: '/Sabores' },
    { name: 'Descuentos', path: '/descuentos' },
    { name: 'Fiesta', path: '/fiesta' }
    ];

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ background: "#555", fontWeight: "bold" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            {/* Logo en pantallas medianas y grandes */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, alignItems: 'center' }}>
                <img src={Logok} alt="Logo AlKeem" style={{ height: '70px', width: 'auto' }} />
            </Box>

            {/* Menú hamburguesa en dispositivos móviles */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link to={page.path} style={{ textDecoration: 'none' }}>
                        <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                    </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>

            {/* Logo en dispositivos móviles */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, alignItems: 'center' }}>
                <img src={Logok} alt="Logo AlKeem" style={{ height: '70px', width: 'auto' }} />
            </Box>

            {/* Menú de navegación en pantallas medianas y grandes */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button key={page.name} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to={page.path} style={{ textDecoration: 'none', color: 'white' }}>
                    {page.name}
                    </Link>
                </Button>
                ))}
            </Box>

            {/* Menú de usuario */}
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
    }

    export default ResponsiveAppBar;
