import firebase from 'firebase'
import { ChangeEvent, useState } from 'react'

export const Login: React.FC = () => {

    const[email, setEmail] = useState<string | null>(null)
    const[password, setPassword] = useState<string | null>(null)

    const db = firebase.database()
    console.log(db)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        console.log(email, e.target.id);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        console.log(password, e.target.id);
    }
    
    return <div className="jumbotron loginBlock">
        <input 
                type="text" 
                placeholder="email" 
                onChange={handleEmailChange}
            />
        <input 
            type="password" 
            placeholder="password"
            id="password"
            onChange={handlePasswordChange}
        />
        <input type="submit" />
    </div>
}