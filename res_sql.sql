/* Resposta 1 */


/* Resposta 2 */
SELECT DISTINCT turma.dia_da_semana FROM turma
LEFT JOIN disciplina ON disciplina.nome = 'Matematica'
WHERE turma.DISCIPLINA_id = disciplina.id

/* Resposta 3 */
SELECT DISTINCT * FROM aluno
LEFT JOIN turma ON turma.ALUNO_id = aluno.Id
LEFT JOIN disciplina ON disciplina.id = turma.DISCIPLINA_id 
WHERE  disciplina.nome = 'Matematica' OR disciplina.nome = 'Fisica'
GROUP by aluno.Nome

/* Resposta 4 */
SELECT DISTINCT * from disciplina
WHERE disciplina.id NOT IN (SELECT turma.DISCIPLINA_id FROM turma)

/* Resposta 5 unfinished */

SELECT DISTINCT * FROM aluno
LEFT JOIN turma ON turma.ALUNO_id = aluno.Id
LEFT JOIN disciplina ON disciplina.id = turma.DISCIPLINA_id
WHERE disciplina.nome = 'Matematica' AND disciplina.nome NOT LIKE 'quimica'
