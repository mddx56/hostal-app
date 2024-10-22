import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { useUsers } from '@/shared/services/user.services'

export default function Users() {
  const { data } = useUsers()
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        {/*<Search />*/}
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Usuarios</h2>
            <p className='text-muted-foreground'>
              {
                data ?
                  data.map((us) => (
                    <div>
                      <p>{us.name}</p>
                      <p>{us.email}</p>
                      <p>{us.role}</p>
                    </div>
                  ))
                  :
                  <div>na</div>
              }
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>

        </div>
      </Layout.Body>
    </Layout>
  )
}
