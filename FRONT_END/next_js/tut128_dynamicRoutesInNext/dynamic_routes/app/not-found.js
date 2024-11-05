import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h2 className='text-4xl font-bold my-4 '>Not Found</h2>
      <p className='text-1g text-gray-600 '>Could not find requested resource</p>
      <Link href="/" className='text-blue-400'>Return Home</Link>
    </div>
  )
}