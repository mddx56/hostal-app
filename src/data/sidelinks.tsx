import {
  IconBuilding,
  IconBuildingStore,
  IconChecklist,
  IconLayoutDashboard,
  IconMap,
  IconMountain,
  IconSettings,
  IconUsers
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Tasks',
    label: '',
    href: '/tasks',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Users',
    label: '',
    href: '/users',
    icon: <IconUsers size={18} />,
  },

  /*{
    title: 'Authentication',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: 'Sign In (email + password)',
        label: '',
        href: '/sign-in',
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Sign In (Box)',
        label: '',
        href: '/sign-in-2',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Sign Up',
        label: '',
        href: '/sign-up',
        icon: <IconHexagonNumber3 size={18} />,
      },
      {
        title: 'Forgot Password',
        label: '',
        href: '/forgot-password',
        icon: <IconHexagonNumber4 size={18} />,
      },
      {
        title: 'OTP',
        label: '',
        href: '/otp',
        icon: <IconHexagonNumber5 size={18} />,
      },
    ],
  },*/

  {
    title: 'Hostals',
    label: '',
    href: '/requests',
    icon: <IconBuildingStore size={18} />,
    sub: [
      {
        title: 'Propiedad',
        label: '',
        href: '/properties',
        icon: <IconBuilding size={18} />,
      },
      {
        title: 'Zonas',
        label: '',
        href: '/zones',
        icon: <IconMap size={18} />,
      },
      {
        title: 'Tipo Propiedad',
        label: '',
        href: '/tps',
        icon: <IconMountain size={18} />,
      },
      {
        title: 'Caracteristicas',
        label: '',
        href: '/feats',
        icon: <IconMountain size={18} />,
      },
    ],
  },

  /* {
     title: 'Error Pages',
     label: '',
     href: '',
     icon: <IconExclamationCircle size={18} />,
     sub: [
       {
         title: 'Not Found',
         label: '',
         href: '/404',
         icon: <IconError404 size={18} />,
       },
       {
         title: 'Internal Server Error',
         label: '',
         href: '/500',
         icon: <IconServerOff size={18} />,
       },
       {
         title: 'Maintenance Error',
         label: '',
         href: '/503',
         icon: <IconBarrierBlock size={18} />,
       },
       {
         title: 'Unauthorised Error',
         label: '',
         href: '/401',
         icon: <IconLock size={18} />,
       },
     ],
   },*/
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
