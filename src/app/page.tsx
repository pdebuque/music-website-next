import Image from 'next/image';
import Front from '@/components/Front'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="min-h-screen mt-10">
        <Front/>
      </section>
      <section className="min-h-screen bg-slate-900 text-slate-100 w-full text-center">
        about
      </section>
      <section className="min-h-screen">
        projects
      </section>
      <section className="min-h-screen bg-slate-900 text-slate-100 w-full text-center">
        thoughts
      </section>
      <section className="min-h-screen">
        contact
      </section>

    </main>
  )
}
