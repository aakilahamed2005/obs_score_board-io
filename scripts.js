var home_mark = 0;
var visitor_mark = 0;


//adding mark of team1
function home_plus(){
	var select_home = document.getElementById('mark-1');
	home_mark += 1;
	select_home.innerHTML = home_mark;
}


//reducing mark of team1
function home_minus(){
	var select_home = document.getElementById('mark-1');
	home_mark -= 1;
	if(home_mark < 0){
		home_mark = 0;
	}
	select_home.innerHTML = home_mark;
}

//adding mark of team2
function visitor_plus(){
	var select_visitor = document.getElementById('mark-2');
	visitor_mark += 1;
	select_visitor.innerHTML = visitor_mark;
}

//reducing mark of team2
function visitor_minus(){
	var select_visitor = document.getElementById('mark-2');
	visitor_mark -= 1;
	if(visitor_mark < 0){
		visitor_mark = 0;
	}
	select_visitor.innerHTML = visitor_mark;
}


//reset the marks
function reset() {
	home_mark = 0;
	visitor_mark = 0;
	var select_home = document.getElementById('mark-1');
	var select_visitor = document.getElementById('mark-2');

	select_home.innerHTML = home_mark;
	select_visitor.innerHTML = visitor_mark;
}


//team name changing functions
function team_1_name(){
	var team_1_name = document.getElementById('team-1-name').value;
	
	var select_home = document.getElementById('team1_name');
	select_home.innerHTML = team_1_name;
	var select_home = document.getElementById('team1_name_');
	select_home.innerHTML = team_1_name;
	

	

}

function team_2_name(){
	var team_2_name = document.getElementById('team-2-name').value;
	var select_visitor = document.getElementById('team2_name');
	select_visitor.innerHTML = team_2_name;

	var select_visitor = document.getElementById('team2_name_');
	select_visitor.innerHTML = team_2_name;

}



//hiding or showing the logo

function show_logo(){
	var select_logo = document.getElementById('logo_1');
	select_logo.style.display = 'inline';

	var select_logo = document.getElementById('logo_2');
	select_logo.style.display = 'inline';
}

function hide_logo(){
	var select_logo = document.getElementById('logo_1');
	select_logo.style.display = 'none';

	var select_logo = document.getElementById('logo_2');
	select_logo.style.display = 'none';
}


//changing the background color of the scoreboard
function team_1_bg_color_change(){
	var select_team1_bg = document.getElementById('box-1');

	//getting color code input
	var team1_bg_code = document.getElementById('team_1_bg_color').value;

	select_team1_bg.style.backgroundColor = team1_bg_code ;
}

function team_2_bg_color_change(){
	var select_team2_bg = document.getElementById('box-2');

	//getting color code input
	var team2_bg_code = document.getElementById('team_2_bg_color').value;

	select_team2_bg.style.backgroundColor = team2_bg_code ;

}



//changing the foreground color of the scoreboard
function team_1_fg_color_change(){
	var select_team1_fg = document.getElementById('team1_name');

	//getting color code input
	var team1_fg_code = document.getElementById('team_1_fg_color').value;

	select_team1_fg.style.color = team1_fg_code ;
}

function team_2_fg_color_change(){
	var select_team2_fg = document.getElementById('team2_name');

	//getting color code input
	var team2_fg_code = document.getElementById('team_2_fg_color').value;

	select_team2_fg.style.color = team2_fg_code ;

}


//changing the mark box color
function mark_box_bg_color(){
	var mark_box_bg = document.getElementById('mark-1');

	//getting color code input
	var bg_code = document.getElementById('mark_box_bg_color').value;

	mark_box_bg.style.backgroundColor = bg_code ;

	var mark_box_bg = document.getElementById('mark-2');

	//getting color code input
	var bg_code = document.getElementById('mark_box_bg_color').value;

	mark_box_bg.style.backgroundColor = bg_code ;
}


function mark_box_fg_color(){
	var mark_box_fg = document.getElementById('mark-1');

	//getting color code input
	var fg_code = document.getElementById('mark_box_fg_color').value;

	mark_box_fg.style.color = fg_code ;

	var mark_box_fg = document.getElementById('mark-2');

	//getting color code input
	var fg_code = document.getElementById('mark_box_fg_color').value;

	mark_box_fg.style.color = fg_code ;
}