import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

export const Table = () => {
	const items = useSelector(state => state.data.items, ()=>{})
	const dispatch = useDispatch()

	return (
		<div className="table-container">
			<div className="row">
			<table className="table mt-5">
				<thead className="thead-dark bg-primary">
					<tr>
						<th className="col-1 col-sm-md-2 col-lg-3" scope="col">#Name</th>
						<th className="col-1 col-sm-md-2 col-lg-3">#Description</th>
						<th className="col-1 col-sm-md-2 col-lg-3">#Image</th>
						<th className="col-1 col-sm-md-2 col-lg-3">#Price</th>
					</tr>
				</thead>
				{items.length !== 0 ? items.map(item=>
					<React.Fragment key={item.id}>
						<tbody> 
							<tr onClick={(e)=>{
            		dispatch({type: "PICK_ITEM", payload: item.id})
            	}}>
								<th className="col-1 col-sm-md-2 col-lg-3"scope="row">{item.name}</th>
								<td className="col-1 col-sm-md-2 col-lg-3" style={{textAlign: "justify"}}>{item.description}</td>
								<td className="col-1 col-sm-md-2 col-lg-3"><img src={item.image} alt="avatar" style={{width: "50px"}} /></td>
								<td className="col-1 col-sm-md-2 col-lg-3">{item.price}</td>
							</tr>
						</tbody>
				</React.Fragment>
			) : null
				}
				</table>
			</div>
		</div>
	)
}