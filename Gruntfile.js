module.exports = function(grunt) {
	grunt.initConfig({
		clean:{
			pc:{
				src:'dest/pc/**/*'
			},
			mb:{
				src:'dest/mb/**/*'
			}
		},
		lintspaces:{
			pc:{
				src:[
					'component/pc/**/*'
				],
				options:{
					newlineMaximum: 1, // 测试最大的换行数
					trailingspaces: true, // 测试无用的空白符
					indentation: 'tabs', // tabs缩进
					ignores:['html-comments','js-comments']
				}
			},
			mb:{
				src:[
					'component/mb/**/*'
				],
				options:{
					newlineMaximum: 1,
					trailingspaces: true,
					indentation: 'tabs',
					ignores:['html-comments','js-comments']
				}
			}
		},
		'string-replace':{
			pc:{
				files:[{
					expand:true,
					cwd: 'component/pc/',
					src: '**/*',
					dest: 'dest/pc/'
				}],
				options:{
					replacements:[{
						pattern:/([\s\S]+)/ig,
						replacement:'<%= grunt.file.read("template/pc-start.html")%>$1<%= grunt.file.read("template/pc-end.html")%>'
					}]
				}
			},
			mb:{
				files:[{
					expand:true,
					cwd: 'component/mb/',
					src: '**/*',
					dest: 'dest/mb/'
				}],
				options:{
					replacements:[{
						pattern:/([\s\S]+)/ig,
						replacement:'<%= grunt.file.read("template/mb-start.html")%>$1<%= grunt.file.read("template/mb-end.html")%>'
					}]
				}
			}
		},
		watch:{
			pc:{
				files:'component/pc/**/*',
				tasks:['clean:pc','lintspaces:pc','string-replace:pc']
			},
			mb:{
				files:'component/mb/**/*',
				tasks:['clean:mb','lintspaces:mb','string-replace:mb']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-lintspaces');

	grunt.registerTask('dev', ['clean','string-replace','watch']);
	grunt.registerTask('dev-pc', ['clean:pc','lintspaces:pc','string-replace:pc','watch:pc']);
	grunt.registerTask('dev-mb', ['clean:mb','lintspaces:mb','string-replace:mb','watch:mb']);
};