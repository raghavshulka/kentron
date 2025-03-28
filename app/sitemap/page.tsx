// import Link from 'next/link'

// const routes = [
//   { path: '/', label: 'Home' },
//   { path: '/about', label: 'About Us' },
//   { path: '/services', label: 'Services' },
//   { path: '/services/web-development', label: 'Web Development' },
//   { path: '/services/mobile-development', label: 'Mobile Development' },
//   { path: '/services/ui-ux-design', label: 'UI/UX Design' },
//   { path: '/services/digital-marketing', label: 'Digital Marketing' },
//   { path: '/portfolio', label: 'Portfolio' } ,
//   { path: '/blog', label: 'Blog' },
//   { path: '/careers', label: 'Careers' },
//   { path: '/contact', label: 'Contact Us' },
//   { path: '/privacy-policy', label: 'Privacy Policy' },
//   { path: '/terms-of-service', label: 'Terms of Service' }
// ]

// export default function Sitemap() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
//       <ul className="space-y-4">
//         {routes.map((route) => (
//           <li key={route.path}>
//             <Link 
//               href={route.path}
//               className="text-blue-600 hover:text-blue-800 hover:underline"
//             >
//               {route.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// } 