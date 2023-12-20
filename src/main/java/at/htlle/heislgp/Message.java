package at.htlle.heislgp;

import jakarta.persistence.*;

@Entity
public class Message {

    public Message() {}

    public Message(long id, History history, String question, String answer) {
        this.id = id;
        this.history = history;
        this.question = question;
        this.answer = answer;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "History_id")
    private History history;

    private String question;

    private String answer;

    public long getId() {
        return id;
    }

    public History getHistory() {
        return history;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }
}
