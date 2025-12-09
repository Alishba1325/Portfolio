import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center py-6 mt-12 border-t border-gray-300 bg-gray-50">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} Alishba. All rights reserved.</p>
    </footer>
  )
}
