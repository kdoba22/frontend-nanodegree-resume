var bio = {
	"name" : "Keith Doba",
	"role" : "Web developer",
	"contacts" : {
		"mobile" : "555-555-5555",
		"email" : "kdoba22@gmail.com",
		"github" : "kdoba22",
		"twitter" : "N/A",
		"location" : "Imperial, MO"
		},
	"welcomeMsg" : "Hi all",
	"skills" : ["development", "problem resolutioin","works great under pressure","works well with others"],
	"bioPic" : "images/fry.jpg"	
}

var education = {
	"schools" : [
		{
			"name" : "DeVry University",
			"location" : "Kansas City, MO, US",
			"Degree" : "BS",
			"Major" : "Electronic Engineering Technology",
			"dates" : 1993,				
			"url" : "http://DeVry.edu"
		},
		{
			"name" : "Webster University",
			"location" : "Webster Groves, MO, US",
			"Degree" : "BS",
			"Major" : "Computer Science",	
			"dates" : 2001,
			"url" : "http://Webster.edu"
		},
		{
			"name" : "Webster University",
			"location" : "Webster Groves, MO, US",
			"Degree" : "MS",
			"Major" : "Computer Information and Resource Managment",
			"dates" : 2003,
			"url" : "http://Webster.edu"
		}
	],
	"onLineCourses": [
	{
		"title" : "JavaScript Crash Course",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "http://www.udacity.com/course/ud804"
	}
	]
}

var work = {
	"jobs" : [
	{
		"employer" : "AT&T",
		"title" : "Senior IT Analyst Application Developer",
		"location" : "St. Louis, MO",
		"dates" : "October 1998 - Present",
		"description" : "Held many differnt jobs including developer, defect manager, productoin support, and testing"
	},
	{	"employer" : "White Rogers",
		"title" : "Final Test Engineer",
		"location" : "St. Louis, MO",
		"dates" : "February 1998 - October 1998",
		"Description" : "Troublshoot and Repair HVAC control board"
	},
	{	"employer" : " Intercard Inc.",
		"title" : "Field Service Engineer",
		"location" : "Maryland Heights, MO",
		"dates" : "February 1996 - February 1998",
		"description" : "Diagnose, Troublshoot, and Repair smart card systems"
	}
  ] 
}

var projects = {
	"projects" : [ 
					
	{
		"title" : "Bundled Bill",
		"dates" : "1999",
		"description" : "Bundled together products and services into new offerings",
		"images" : ["images/197x148.gif", "images/197x148.gif"]
	},		
	{
		"title" : "Encapulated discounting",
		"dates" : "2001",
		"description" : "Discounted bundled offerings created in the Bundled Bill Project",
		"images" : []
	},
	{
		"title" : "Ordering Management Systems",
		"dates" : "2007",
		"description" : "Created an Ordering system for New products and services",
		"images" : []
	},	
	{
		"title" : "DataBase Cleansing",
		"dates" : "2010",
		"description" : "Re-Write the Customer Database Cleansing routines",
		"images" : []
	},
	{
		"title" : "Cloud Services",
		"dates" : "2014",
		"description" : "Provision Cloud Service offerings",
		"images" : []
	}
	]
}

//Object/Function to display my bio informatoin on my Resume
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedWelMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage);
	$("#header").append(formattedWelMsg);
	$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
		 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		 	$("#skills").append(formattedSkill);
		 };

 	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email); 
	var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

// display contact info along the top  		
 	$("#topContacts").append(formattedMobile);
 	$("#topContacts").append(formattedEmail);
 	$("#topContacts").append(formattedGitHub);
 	$("#topContacts").append(formattedTwitter);
 	$("#topContacts").append(formattedLocation);

//display the contact info along the bottom
 	$("#footerContacts").append(formattedMobile); 	
 	$("#footerContacts").append(formattedEmail);	
	$("#footerContacts").append(formattedGitHub); 	
 	$("#footerContacts").append(formattedTwitter); 	
 	$("#footerContacts").append(formattedLocation);
}

//Object/Function to display my work history on my Resume
work.display = function(){
 	for (job in work.jobs) {
 		$("#workExperience").append(HTMLworkStart);
 // create new div for work experience
		 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		 var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		 var formattedEmployerTitle = formattedEmployer + formattedTitle;
		 $(".work-entry:last").append(formattedEmployerTitle);
//  concat employer and title

		 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		 $(".work-entry:last").append(formattedDates);
		 var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		 $(".work-entry:last").append(formattedDescription);
 	}
}

//Object/Function to display my project history on my Resume
 projects.display = function() {
 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);			

 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 		$(".project-entry:last").append(formattedTitle);

 		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 		$(".project-entry:last").append(formattedDates);

 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 		$(".project-entry:last").append(formattedDescription);

 		if (projects.projects[project].images.length > 0) {
 			for (image in projects.projects[project].images) {
 				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 			$(".project-entry:last").append(formattedImage);
 			}
 		}
	}
 }

//Object/Function to display my education informatoin on my Resume
education.display = function() {
 	for (school in education.schools) {
 		$("#education").append(HTMLschoolStart);

 		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
 		$(".education-entry:last").append(formattedSchoolName);

 		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].Degree);
 		$(".education-entry:last").append(formattedSchoolDegree);

 		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 		$(".education-entry:last").append(formattedSchoolDates);
 		
 		var formattedSchoolLocation = HTMLschoolName.replace("%data%", education.schools[school].location);
 		$(".education-entry:last").append(formattedSchoolLocation); 		

 		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].Major);
 		$(".education-entry:last").append(formattedSchoolMajor);
 	}

//Object/Function to display my online education informatoin on my Resume
 	 	for (course in education.onLineCourses) {
			$(".education-entry:last").append(HTMLonlineClasses);

  	 	 	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onLineCourses[course].title);
 	 	 	$(".education-entry:last").append(formattedOnlineTitle);

 	 		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onLineCourses[course].school);
 	 		$(".education-entry:last").append(formattedOnlineSchool);

 	 		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onLineCourses[course].dates);
 	 		$(".education-entry:last").append(formattedOnlineDates);

	 		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onLineCourses[course].url);
 	 		$(".education-entry:last").append(formattedOnlineURL);

  	 	}
}

//Function to swicth my last name to upper case after the Internationalize button is pressed
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  console.log(name[1])
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  console.log(name[0])
  return name[0] +" "+name[1];
}
//Highlifghts the locations on your Google Maps
function locationizer(work_obj){
	var locationArray =[];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
		
	return locationArray;
}

// using console.log, this routine will display the location that is being clisked on the web page.
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y)
})

//Code to call each of the objects/functions to place the information for each section of my resume
bio.display();
work.display();
projects.display();
education.display();

// code to add the Internatinoalize button to my resume
$("#main").append(internationalizeButton);
// to add a google Map to your resume
$("#mapDiv").append(googleMap);

