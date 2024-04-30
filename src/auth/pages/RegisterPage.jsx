import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            label='Name'
                            type='text'
                            placeholder='Name'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
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

                    <Grid container sx={{ mt: 3 }} >
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
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent='end' sx={{ mt: 1 }}>
                    <Typography sx={{ mr: 1 }}>Alrady have an account?</Typography>
                    <Link component={RouterLink} to='/auth/login'>
                        Login
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
