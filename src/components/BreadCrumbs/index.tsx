import { Breadcrumbs, Link } from "@mui/material"

export const BreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{m:2}}>
      <Link
        underline="hover"
        color="inherit"
        href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="text.primary"
        href="/material-ui/react-breadcrumbs/"
        aria-current="page"
      >
        Breadcrumbs
      </Link>
    </Breadcrumbs>
  )
}
