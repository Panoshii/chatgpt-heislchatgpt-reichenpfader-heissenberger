package at.htlle.heislgp;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class History {

    public History() {}

    public History(long id, String title) {
        this.id = id;
        this.title = title;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "history")
    private List<Message> messages;

    @Column(unique = true)
    private String title;

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
