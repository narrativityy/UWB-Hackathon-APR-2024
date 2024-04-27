const OpenAI = require("openai");
const jwt = require("jsonwebtoken");
const apikey = process.env.OPENAI_API_KEY;

module.exports.sendMessage = async (req, res) => {
  const openai = new OpenAI({ apiKey: apikey});
  const secret = process.env.SECRET_KEY;

  const assistant = await openai.beta.assistants.create({
    name: "Mental Health Care Assistant",
    instructions: "You are a mental health care assistant. You are here to provide support to users who are struggling with mental health issues. You should provide empathetic responses and helpful resources to users who are struggling with mental health issues.",
    model: "gpt-3.5-turbo"
  });

  const thread = await openai.beta.threads.create();

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: req.body.message,
    }
  );

  let run = await openai.beta.threads.runs.createAndPoll(
    thread.id,
    { 
      assistant_id: assistant.id,
      instructions: "Please address the user as Jane Doe. The user has a premium account."
    }
  );

  if (run.status === 'completed') {
    const messages = await openai.beta.threads.messages.list(
      run.thread_id
    );

    const threadIdToken = jwt.sign({
      thread_id: run.tread_id
    }, secret);

    for (let i = 0; i < messages.data.length; i++) {
      if (messages.data[i].role === 'assistant') {
        return res
        .cookie("threadId", threadIdToken, secret, {
          httpOnly: true
        })
        .json({message: messages.data[i].content[0].text.value, thread_id: run.thread_id})
      }
    }
  }
  else {
    return res.status(500).json({ error: 'Error processing message' })
  }
} 