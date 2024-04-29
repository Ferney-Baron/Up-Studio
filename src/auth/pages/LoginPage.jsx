import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';

export const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        label='Email'
                        type='email'
                        placeholder='mail@google.com'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label='Password'
                        type='password'
                        placeholder='Password'
                        fullWidth
                    />
                </Grid>

                <Grid container sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <Button
                            variant='contained'
                            fullWidth
                            sx={{
                                backgroundColor: 'secondary.main',
                                color: 'primary.ligth',
                                '&:hover': { backgroundColor: 'secondary.main', opacity: 0.8 }
                            }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent='end' sx={{ mt: 1 }}>
                <Link component={RouterLink} to="/auth/register">
                    Create an account
                </Link>
            </Grid>
        </AuthLayout>
    )
}
