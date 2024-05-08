from openai import OpenAI


def excute_chatgpt(prompt):
    client = OpenAI()
    input = "あなたはAIアシスタントです。以下の質問に親切に答えてください。\n" + prompt
    print(input)
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": input,
            },
        ],
    )

    print(completion.choices[0].message)
    print(completion)
    return completion.choices[0].message.content
