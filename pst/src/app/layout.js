import './globals.css'

export const metadata = {
  title: 'Princeton Solidarity for Palestine',
  description: 'Timeline and Archive for Princeton Solidarity for Palestine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
        <footer className="bg-black text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Ida B. Wells Just Data Lab | Princeton Solidarity for Palestine</p>
          </div>
        </footer>
      </body>
    </html>
  )
}