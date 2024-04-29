import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title }) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.lightGray', padding: 4 }}
        >

            <Grid item sx={{ mt: -9 }}>
                <Typography variant='h2' fontWeight={600} fontSize={30} sx={{ letterSpacing: 1, ml: -0.08 }}>Up</Typography>
                <Typography variant='h2' fontWeight={600} fontSize={30} sx={{ letterSpacing: 1, mt: -1.7 }}>Studio</Typography>
            </Grid>


            <Grid item
                className="box-shadow"
                xs={3}
                sx={{
                    backgroundColor: 'primary.light',
                    padding: 4,
                    borderRadius: 2,
                    mt: 2,
                    width: { sm: 450 },
                }}
            >

                <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>

                {children}

            </Grid>

        </Grid>
    )
}
