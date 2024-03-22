import AdminLayout from 'src/layouts/AdminLayout'
import Artist from 'src/pages/admin/home/artist/Artist'
import { HomeAdmin } from 'src/pages/admin/home/Home'
import Album from 'src/pages/admin/home/album/Album'
import Songs from 'src/pages/admin/home/song/Song'

export const ADMIN_ROUTE = {
    children: [
      {
        element: <AdminLayout/>,
        children: [
          {
            path: 'dashboard',
            element: <HomeAdmin/>
          },
          {
            path: 'song',
            element: <Songs/>
          },
          {
            path: 'album',
            element: <Album/>
          },
          {
            path: 'artist',
            element: <Artist/>
          }
        ]
      }
    ]
}