import { Group } from "@mui/icons-material";
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material";

type Props = {
  openForm: () => void;
}
export default function Navbar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradients(135deg, #182a74 0%, #218aae 69%, #20a7ac 89%)'}}>
        <Container maxWidth ='xl'>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              <MenuItem sx={{display: 'flex', gap: 2}}>
                <Group fontSize="large">
                <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
                </Group>
              </MenuItem>
            </Box>
            <Box sx={{display: 'flex'}}>
              <MenuItem sx={{fontSize: '1.2tem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                Activities
              </MenuItem>
              <MenuItem sx={{fontSize: '1.2tem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                About
              </MenuItem>
              <MenuItem sx={{fontSize: '1.2tem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                Contact
              </MenuItem>
            </Box>
            <Button 
              size="large" 
              variant="contained" 
              color="warning"
              onClick={openForm}
              >
                Create activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
