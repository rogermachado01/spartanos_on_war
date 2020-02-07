/* Resposta 1 */
SELECT DISTINCT * FROM aluno
LEFT JOIN aluno_turma ON aluno_turma.aluno_id = aluno.Id
LEFT JOIN turma ON aluno_turma.turma_id = turma.id
LEFT JOIN professor ON professor.id = turma.PROFESSOR_id
WHERE professor.nome = 'joao pedro'
GROUP by aluno.Nome

/* Resposta 2 */
SELECT DISTINCT turma.dia_da_semana FROM turma
LEFT JOIN disciplina ON disciplina.nome = 'Matematica'
WHERE turma.DISCIPLINA_id = disciplina.id

/* Resposta 3 */
SELECT DISTINCT * FROM aluno
LEFT JOIN turma ON turma.ALUNO_id = aluno.Id
LEFT JOIN disciplina ON disciplina.id = turma.DISCIPLINA_id AND disciplina.nome = 'Matematica' 
WHERE aluno.Nome IN (SELECT aluno.Nome FROM aluno JOIN(turma, disciplina) ON turma.ALUNO_id = aluno.id AND disciplina.id = turma.DISCIPLINA_id WHERE disciplina.nome = 'fisica')
AND disciplina.nome IS NOT NULL
GROUP by aluno.Nome

/* Resposta 4 */
SELECT DISTINCT * from disciplina
WHERE disciplina.id NOT IN (SELECT turma.DISCIPLINA_id FROM turma)

/* Resposta 5 */

SELECT DISTINCT * FROM aluno
LEFT JOIN turma ON turma.ALUNO_id = aluno.Id
LEFT JOIN disciplina ON disciplina.id = turma.DISCIPLINA_id AND disciplina.nome = 'Matematica'
WHERE aluno.Nome NOT IN (SELECT aluno.Nome FROM aluno JOIN(turma, disciplina) ON turma.ALUNO_id = aluno.id AND disciplina.id = turma.DISCIPLINA_id WHERE disciplina.nome = 'quimica')
AND disciplina.nome IS NOT NULL
GROUP by aluno.Nome
