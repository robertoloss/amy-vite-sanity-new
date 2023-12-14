import { Outlet } from 'react-router-dom'
import HeaderBar from '../components/HeaderBar'


export default function Root() {
	console.log("Home");
	return (
		<>
			<HeaderBar />
			<Outlet/>
		</>
	)
}
