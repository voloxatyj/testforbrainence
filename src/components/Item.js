import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid'

export const Item = () => {
	const modal = useSelector(state => state.ui.modal)
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState('')
	const [price, setPrice] = useState(Number)
	const dispatch = useDispatch()
	
	return (
	modal && (
		<div className="modal fade" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="staticBackdropLabel">Add Item</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close"
							onClick={()=>dispatch({type: "CLOSE_MODAL"})}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Name</label>
								<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
								onChange={(e)=>setName(e.target.value)}/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Description</label>
								<input type="text" className="form-control" id="exampleInputPassword1" 
								onChange={(e)=>setDescription(e.target.value)}/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Image</label>
								<input type="text" className="form-control" id="exampleInputPassword1" 
								onChange={(e)=>setImage(e.target.value)}/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Price</label>
								<input type="number" className="form-control" id="exampleInputPassword1" 
								onChange={(e)=>setPrice(e.target.value)}/>
							</div>
							<button type="submit" className="btn btn-primary" 
								onClick={(e)=>{
									e.preventDefault()
									dispatch({type:"ADD_ITEM", payload: {name,description,image,price,id:uuidv4()}})
									dispatch({type: "CLOSE_MODAL"})
								}}
							>add item</button>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal"
							onClick={()=>dispatch({type: "CLOSE_MODAL"})}>Close</button>
					</div>
				</div>
			</div>
		</div>
	))
}