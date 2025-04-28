    // App.jsx
    import React, { useState, useEffect } from 'react';
    import { 
    AppBar, 
    Tabs, 
    Tab, 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    Paper,
    Fade,
    useMediaQuery,
    useTheme
    } from '@mui/material';
    import { styled } from '@mui/material/styles';
    import '../../estilos/sec7.css';
    import Img2 from '../../estilos/img/sec7.png'
    // Componentes personalizados modernos
    const ModernAppBar = styled(AppBar)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    }));

    const ModernTab = styled(Tab)({
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    opacity: 0.7,
    '&.Mui-selected': {
        color: '#ff3a8c',
        opacity: 1,
    },
    '&:hover': {
        opacity: 1,
        transform: 'translateY(-2px)',
    },
    });

    const ModernTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '700',
    letterSpacing: '-0.5px',
    marginBottom: '1.5rem',
    position: 'relative',
    display: 'inline-block',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '40%',
        height: '4px',
        borderRadius: '2px',
        background: 'linear-gradient(90deg, #ff3a8c 0%, #ff8c69 100%)',
        bottom: '-10px',
        left: '0',
    },
    '& .highlight': {
        backgroundImage: 'linear-gradient(90deg, #ff3a8c, #ff8c69)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
        position: 'relative',
    },
    }));

    const GlassCard = styled(Card)({
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    },
    });

    const StatsCard = styled(GlassCard)({
    textAlign: 'center',
    padding: '30px 15px',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, #ff3a8c 0%, #ff8c69 100%)',
    },
    '& .award-number': {
        fontWeight: '800',
        fontSize: '42px',
        backgroundImage: 'linear-gradient(90deg, #ff3a8c, #ff8c69)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        marginBottom: '5px',
        fontFamily: "'Poppins', sans-serif",
    },
    '& .award-plus': {
        position: 'absolute',
        color: '#ff3a8c',
        top: '15px',
        right: '15px',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    '& .award-text': {
        fontSize: '16px',
        color: '#555',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '500',
    },
    });

    const ProviderCard = styled(GlassCard)({
    textAlign: 'center',
    padding: '30px 20px',
    height: '100%',
    '& .provider-icon-container': {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
    },
    '& .provider-icon': {
        fontSize: '36px',
    },
    '&:hover .provider-icon-container': {
        transform: 'scale(1.1) rotate(5deg)',
        transition: 'all 0.3s ease',
    }
    });

    const LocationCard = styled(GlassCard)({
    padding: '25px',
    textAlign: 'center',
    height: '100%',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '10%',
        width: '80%',
        height: '3px',
        background: 'linear-gradient(90deg, #ff3a8c 0%, #ff8c69 100%)',
        borderRadius: '3px 3px 0 0',
        opacity: 0,
        transition: 'all 0.3s ease',
    },
    '&:hover:after': {
        opacity: 1,
    }
    });

    const ContactButton = styled('div')({
    background: 'linear-gradient(45deg, #ff3a8c 0%, #ff8c69 100%)',
    color: 'white',
    padding: '14px 32px',
    borderRadius: '30px',
    display: 'inline-block',
    margin: '15px auto',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 58, 140, 0.3)',
    letterSpacing: '0.5px',
    fontFamily: "'Montserrat', sans-serif",
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    '&:hover': {
        boxShadow: '0 8px 25px rgba(255, 58, 140, 0.5)',
        transform: 'translateY(-3px)',
    },
    '&:active': {
        transform: 'translateY(1px)',
    }
    });

    function App() {
    const [value, setValue] = useState(0);
    const [animate, setAnimate] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        setAnimate(true);
    }, [value]);

    const handleChange = (event, newValue) => {
        setAnimate(false);
        setTimeout(() => {
        setValue(newValue);
        setAnimate(true);
        }, 300);
    };

    return (
        <div className="App">
        <div className="circle-decoration circle-1"></div>
        <div className="circle-decoration circle-2"></div>
        
        <ModernAppBar position="sticky">
            <Tabs
            value={value}
            onChange={handleChange}
            centered={!isMobile}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            indicatorColor="secondary"
            TabIndicatorProps={{
                style: {
                backgroundColor: '#ff3a8c',
                height: '3px',
                borderRadius: '3px 3px 0 0',
                }
            }}
            >
            <ModernTab label="Quienes somos" />
            <ModernTab label="Nuestras tiendas" />
            <ModernTab label="Estadísticas" />
            <ModernTab label="Proveedores" />
            </Tabs>
        </ModernAppBar>

        {/* Sección: Quienes somos */}
        <TabPanel value={value} index={0} animate={animate}>
            <Container maxWidth="lg" className="section-container">
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                <div className="modern-image-container">
                    <div className="image-blob">
                    <img src={Img2} alt="Personas disfrutando helados" className="modern-image" />
                    </div>
                    <div className="blob-decoration"></div>
                </div>
                </Grid>
                <Grid item xs={12} md={6}>
                <ModernTitle variant="h3" gutterBottom>
                    ¡La <span className="highlight">magia</span> detrás de cada <span className="highlight">helado</span>!
                </ModernTitle>
                <Typography variant="body1" paragraph className="modern-paragraph">
                    En AlKeem, creemos que un buen helado puede alegrar cualquier momento. Somos una heladería apasionada por crear sabores únicos, frescos y llenos de magia.
                </Typography>
                <Typography variant="body1" paragraph className="modern-paragraph">
                    Desde nuestros inicios, nos hemos dedicado a ofrecer experiencias deliciosas, utilizando ingredientes de alta calidad y mucho amor en cada receta.
                </Typography>
                <Typography variant="body1" paragraph className="modern-paragraph">
                    Nuestra misión es compartir felicidad en cada cucharada y ser parte de tus mejores recuerdos. ¡En AlKeem, cada sabor cuenta una historia!
                </Typography>
                <div className="signature">
                    AlKeem Heladería
                </div>
                </Grid>
            </Grid>
            </Container>
        </TabPanel>

        {/* Sección: Nuestras tiendas */}
        <TabPanel value={value} index={1} animate={animate}>
            <Container maxWidth="lg" className="section-container">
            <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                <ModernTitle variant="h3" gutterBottom>
                    <span className="highlight">Horarios</span> de atención
                </ModernTitle>
                <div className="schedule-container">
                    <div className="schedule-item">
                    <div className="schedule-day">Lunes a viernes</div>
                    <div className="schedule-time">11:00 a.m. - 9:00 p.m.</div>
                    </div>
                    <div className="schedule-item">
                    <div className="schedule-day">Sábados y domingos</div>
                    <div className="schedule-time">12:00 p.m. - 10:00 p.m.</div>
                    </div>
                </div>
                <Typography variant="body1" className="slogan-text">
                    ¡Te esperamos para que disfrutes de nuestros mejores helados cuando quieras!
                </Typography>
                <div className="ice-cream-decoration">
                    <img src="/api/placeholder/150/300" alt="Helado decorativo" />
                </div>
                </Grid>
                <Grid item xs={12} md={7}>
                <ModernTitle variant="h3" gutterBottom>
                    Nuestras <span className="highlight">Tiendas</span>
                </ModernTitle>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <LocationCard elevation={0}>
                        <div className="location-badge">Sede Principal</div>
                        <Typography variant="h6" className="location-title">Sucursal Centro</Typography>
                        <div className="location-address">
                        <Typography variant="body2">
                            Av. Principal #123<br />
                            Centro Comercial Alameda<br />
                            Tel: (555) 123-4567
                        </Typography>
                        </div>
                        <div className="map-modern">
                        <img src="/api/placeholder/280/180" alt="Mapa sucursal centro" />
                        </div>
                    </LocationCard>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <LocationCard elevation={0}>
                        <div className="location-badge">Nueva Sede</div>
                        <Typography variant="h6" className="location-title">Sucursal Norte</Typography>
                        <div className="location-address">
                        <Typography variant="body2">
                            Calle Nogal #456<br />
                            Plaza del Sol, Local 23<br />
                            Tel: (555) 765-4321
                        </Typography>
                        </div>
                        <div className="map-modern">
                        <img src="/api/placeholder/280/180" alt="Mapa sucursal norte" />
                        </div>
                    </LocationCard>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Container>
        </TabPanel>

        {/* Sección: Estadísticas */}
        <TabPanel value={value} index={2} animate={animate}>
            <Container maxWidth="lg" className="section-container">
            <ModernTitle variant="h3" align="center" gutterBottom>
                Los <span className="highlight">números</span> que cuentan nuestra historia
            </ModernTitle>
            <Grid container spacing={4} sx={{ marginTop: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                <StatsCard elevation={0}>
                    <span className="award-plus">+</span>
                    <Typography className="award-number">91</Typography>
                    <Typography className="award-text">Premios Ganados</Typography>
                </StatsCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <StatsCard elevation={0}>
                    <span className="award-plus">+</span>
                    <Typography className="award-number">45</Typography>
                    <Typography className="award-text">Sabores Únicos</Typography>
                </StatsCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <StatsCard elevation={0}>
                    <span className="award-plus">+</span>
                    <Typography className="award-number">12</Typography>
                    <Typography className="award-text">Años de Experiencia</Typography>
                </StatsCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <StatsCard elevation={0}>
                    <span className="award-plus">+</span>
                    <Typography className="award-number">10K</Typography>
                    <Typography className="award-text">Clientes Felices</Typography>
                </StatsCard>
                </Grid>
            </Grid>
            <div className="stats-decoration">
                <div className="floating-scoop"></div>
                <div className="floating-cone"></div>
            </div>
            </Container>
        </TabPanel>

        {/* Sección: Proveedores */}
        <TabPanel value={value} index={3} animate={animate}>
            <Container maxWidth="lg" className="section-container">
            <ModernTitle variant="h3" align="center" gutterBottom>
                Nuestros <span className="highlight">Aliados</span> de Calidad
            </ModernTitle>
            <Typography variant="body1" paragraph align="center" className="provider-intro">
                Trabajamos con los mejores proveedores para garantizar la excelencia en cada ingrediente.
            </Typography>
            
            <Grid container spacing={4} sx={{ marginTop: 4 }}>
                <Grid item xs={12} sm={6} md={4}>
                <ProviderCard elevation={0}>
                    <div className="provider-icon-container">
                    <div className="provider-icon">🥛</div>
                    </div>
                    <Typography variant="h6" className="provider-title">Lácteos Frescos</Typography>
                    <Typography variant="body2" className="provider-desc">
                    Productos lácteos de la más alta calidad, provenientes de granjas locales con prácticas sostenibles.
                    </Typography>
                    <div className="provider-tag">Proveedor Local</div>
                </ProviderCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <ProviderCard elevation={0}>
                    <div className="provider-icon-container">
                    <div className="provider-icon">🍓</div>
                    </div>
                    <Typography variant="h6" className="provider-title">Frutas Selectas</Typography>
                    <Typography variant="body2" className="provider-desc">
                    Frutas frescas y orgánicas cultivadas por agricultores comprometidos con el medio ambiente.
                    </Typography>
                    <div className="provider-tag">Orgánico</div>
                </ProviderCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <ProviderCard elevation={0}>
                    <div className="provider-icon-container">
                    <div className="provider-icon">🍫</div>
                    </div>
                    <Typography variant="h6" className="provider-title">Chocolate Premium</Typography>
                    <Typography variant="body2" className="provider-desc">
                    Chocolate de origen único, procesado artesanalmente para resaltar sus notas aromáticas.
                    </Typography>
                    <div className="provider-tag">Comercio Justo</div>
                </ProviderCard>
                </Grid>
            </Grid>
            
            <Box sx={{ marginTop: 8, padding: 5 }} className="supplier-contact-container">
                <Typography variant="h4" align="center" gutterBottom className="supplier-title">
                ¿Quieres ser parte de nuestra cadena de calidad?
                </Typography>
                <Typography variant="body1" align="center" paragraph className="supplier-desc">
                En AlKeem valoramos a nuestros proveedores y buscamos establecer relaciones duraderas.
                Si ofreces productos de alta calidad, nos encantaría conocerte.
                </Typography>
                <div className="button-container">
                <ContactButton>
                    Contáctanos
                </ContactButton>
                </div>
            </Box>
            </Container>
        </TabPanel>
        </div>
    );
    }

    function TabPanel(props) {
    const { children, value, index, animate, ...other } = props;
    const isActive = value === index;

    return (
        <div
        role="tabpanel"
        hidden={!isActive}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
        style={{ 
            display: isActive ? 'block' : 'none',
            padding: '40px 0'
        }}
        >
        <Fade in={animate && isActive} timeout={800}>
            <div>{children}</div>
        </Fade>
        </div>
    );
    }

    export default App;