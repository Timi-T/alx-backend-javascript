export default function guardrail(func) {
  const queue = [];
  try {
    queue.push(func());
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
