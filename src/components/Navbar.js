import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

export const Navbar = () => {
	const dispatch = useDispatch()
	const [input, setInput] = useState('')
	const item = useSelector(state => state.data.item)

	return (
		<Fragment>
			<nav className="navbar fixed-top navbar-dark bg-primary">
				<a className="navbar-brand">testforbrainence</a>
				<i className="fas fa-plus-circle fa-2x"
					style={{color: "var(--white)"}}
					onClick={()=>dispatch({type:"OPEN_MODAL"})}
					></i>
				<i className="fas fa-trash-alt fa-2x"
					style={{color: "var(--white)"}}
					onClick={()=>dispatch({type: "REMOVE_ITEM", payload: item[0].id})}
					></i>
				<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
						onChange={(e)=>setInput(e.target.value)}/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit"
						onClick={(e)=>{
							e.preventDefault()
							dispatch({type: "FIND_ITEM", payload: input})
							setInput('')
						}}
					>Search</button>
				</form>
			</nav>
		</Fragment>
	)
}