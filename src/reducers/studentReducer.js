var students = function(state, action){

	var studentsArray = [
		{
			name: "Casey",
			seat: 9
		},
		{
			name: "Connie",
			seat: 10
		}
	]

	if(action.type=="PICK_STUDENT"){
		return action.payload
	}else{
		return studentsArray
	}
	

}

export default students;
