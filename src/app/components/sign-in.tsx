
import { signIn } from "@/app/auth"
import React from 'react'
 
const SignIn: React.FC = () => {
    return (
        <form
          action={async () => {
            "use server"
            await signIn("github")
          }}
        >
          <button type="submit" className="bg-slate-100 text-slate-600 p-3">Signin with GitHub</button>
        </form>
      )
}

export default SignIn;