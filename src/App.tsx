import React from 'react'
import tw from 'twin.macro'
import { Button} from './components/index'



const App = () => (
  < >
      <div tw='bg-black justify-around grid grid-cols-4'>
      <Button >
        Inicio
      </Button>
      <Button >
        Desarrollo
      </Button>
      <Button >
        Nosotros
      </Button>
      <Button >
        Fin
      </Button>
      </div>
      <div tw='h-screen w-full bg-red-900'>
        <h1 
        tw='text-3xl items-center justify-center text-center self-center justify-items-center'
        
        >Twin.Macro</h1>
      </div>
  </>
)

export default App
