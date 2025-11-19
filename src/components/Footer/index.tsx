import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-500 py-2'>
      <div className='container mx-auto text-center text-white'>
        <p>Projeto contador - Teste <a className='font-bold'>Cote Fácil</a></p>
        Este é um projeto de teste. Developed by {' '}
        <a className='font-bold'>Matheus Mendes</a>
        <div>
            Redes sociais : {' '}
            <a className='hover:underline' href='https://www.linkedin.com/in/matheusmendespp/'>Linkedin</a> / {' '}
            <a className='hover:underline' href='https://github.com/matheusmndspp'>Github</a>
        </div>
      </div>
    </div>
  )
}
export default Footer