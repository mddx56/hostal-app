import { Button } from '@/components/custom/button'
import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UserNav } from '@/components/user-nav'
import { useZones } from '@/shared/services/zone.services'
import { zoneType } from '@/shared/types/zone.type'
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'

export default function Zones() {
    const [isOpen, setIsOpen] = useState(false)
    const { data, loading } = useZones();

    const handleCreate = () => {
        setIsOpen(false)

    }

    if (loading) return 'cargando...';

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
                <div className='container mx-auto p-4 space-y-2'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-2xl font-bold tracking-tight'>Zonas</h2>
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                                <Button onClick={() => { console.log('first') }}>
                                    <IconPlus className="mr-2 h-4 w-4" /> Create New
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{'Create New Item'}</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <Input
                                        placeholder="Nombre"
                                    />
                                    <Textarea
                                        placeholder="Descripcion"
                                    />
                                    <Button onClick={handleCreate}>{'Create'}</Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>id</TableHead>
                                <TableHead>name</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item: zoneType) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon" >
                                            <IconPencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" >
                                            <IconTrash className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>

                </div>
            </Layout.Body>
        </Layout>
    )
}
