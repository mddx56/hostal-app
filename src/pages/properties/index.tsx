import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { useProperties } from '@/shared/services/property.sevice'

export default function Properties() {

  const { data } = useProperties()

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
            <h2 className='text-2xl font-bold tracking-tight'>Propiedades</h2>
            <p className='text-muted-foreground'>
              {
                data ?
                  data.map((pro) => (
                    <p>{pro.name}</p>
                  ))
                  :
                  <p>nada</p>
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