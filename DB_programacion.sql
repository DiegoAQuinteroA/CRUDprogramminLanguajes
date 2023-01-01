create table lenguajes_progrmacion 
(
	id int not null auto_increment,
	nombre varchar(255) not null,
	anio_salida  int not null,
	github_rank int null,
	created_at datetime not null default current_timestamp,
	update_at datetime on update current_timestamp not null default current_timestamp,
	primary key(id)
);

select * from lenguajes_progrmacion;

insert into lenguajes_progrmacion(
	nombre,
    anio_salida,
    github_rank
)values
	('javaScript', 1995, 1),
    ('phyton', 1991, 2),
    ('java', 1995, 3),
    ('typescrip', 2012, 4),
    ('C#', 2000, 5)



