SELECT nome, responsavel, matricula, cpf FROM aluno 
	WHERE matricula = 1
    
SELECT nome, responsavel, matricula, cpf FROM aluno 
	WHERE nome LIKE 'J%'

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A
	WHERE A.nome LIKE '%A%'

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A
	WHERE A.nome LIKE 'José Castro'


SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula >= 2

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula <= 2

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula <> 2

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula != 2



SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula = 1 + 1

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula = 2 - 1

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula = 2 * 1

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula = 2 / 1

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula = 3 % 2


SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.nome LIKE 'j%' AND A.matricula < 2

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.nome LIKE 'm%' OR A.matricula > 1


SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula BETWEEN 1 AND 3 

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula NOT BETWEEN 1 AND 3 

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula IN (1,2)

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula NOT IN (1,2)

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula IS NULL

SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A WHERE A.matricula IS NOT NULL



SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A 
	WHERE A.nome LIKE 'm%' OR A.matricula > 1

SELECT p.nome, p.cpf, p.materia FROM professor p

SELECT au.id_professor, au.id_aluno FROM aulas au



INSERT INTO aluno (nome, cpf, responsavel) VALUES ('Fabio Lucas', 1235568877, 'Zetty Venson')
SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A

UPDATE aluno SET nome='Jaqueline Garcia', responsavel='Josefina' WHERE matricula = 1
SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A

DELETE FROM aluno WHERE matricula = 5
SELECT A.nome, A.responsavel, A.matricula, cpf FROM aluno A