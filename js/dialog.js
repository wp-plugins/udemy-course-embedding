tinyMCEPopup.requireLangPack();

var ExampleDialog = {
	init : function() {
		var f = document.forms[0];
		
		document.getElementById('1234').onclick = function(e) {
		    if (this.checked)
			    document.getElementById('styles').style.display = "block";
			else
			    document.getElementById('styles').style.display = "none";
		}

		// Get the selected contents as text and place it in the input
	},

	insert : function() {
		// Insert the contents from the input into the document
		styles= '';
		if (document.getElementById('1234').checked) {
		    if (document.getElementById('border-size').value != '')
		        styles += 'border-style: solid; ';
		    styles += 'border-size: ';
		    styles += document.getElementById('border-size').value + '; ';
		    styles += 'border-color: ';
		    styles += document.getElementById('border-color').value + '; ';
		    styles += 'border-radius: ';
		    styles += document.getElementById('border-radius').value + '; ';
		    styles += 'float: ';
		    styles += document.getElementById('float').value + '; ';
	  	    styles += 'margin: ';
		    styles += document.getElementById('margin').value + '; ';
		}
		insertValue = '<a href="';
		insertValue += document.getElementById('course-url').value;
		insertValue += '" style="'+styles+'" ';
		insertValue += 'id="udemy-course-widget">Udemy Course</a>';
		insertValue += unescape("%3Cscript%20type%3D%22text/javascript%22%3Edocument.write%28unescape%28%22%253Cscript%20src%3D%27%22+%22http%3A//www.udemy.com/static/js/embed.js%27%20type%3D%27text/javascript%27%253E%253C/script%253E%22%29%29%3B%3C/script%3E");
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, insertValue);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(ExampleDialog.init, 'dialog4.htm');
