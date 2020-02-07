/* Resposta 2 */
SELECT turma.dia_da_semana FROM turma
LEFT JOIN disciplina ON disciplina.nome = 'Matematica'
WHERE turma.DISCIPLINA_id = disciplina.id

/* Resposta 4 */
SELECT * from disciplina
WHERE disciplina.id NOT IN (SELECT turma.DISCIPLINA_id FROM turma)