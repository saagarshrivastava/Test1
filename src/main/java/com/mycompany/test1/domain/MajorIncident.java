package com.mycompany.test1.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.elasticsearch.annotations.FieldType;
import java.io.Serializable;
import java.util.Objects;

/**
 * A MajorIncident.
 */
@Entity
@Table(name = "major_incident")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@org.springframework.data.elasticsearch.annotations.Document(indexName = "majorincident")
public class MajorIncident implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "description")
    private String description;

    @Column(name = "source")
    private String source;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public MajorIncident code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public MajorIncident description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSource() {
        return source;
    }

    public MajorIncident source(String source) {
        this.source = source;
        return this;
    }

    public void setSource(String source) {
        this.source = source;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MajorIncident)) {
            return false;
        }
        return id != null && id.equals(((MajorIncident) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "MajorIncident{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", description='" + getDescription() + "'" +
            ", source='" + getSource() + "'" +
            "}";
    }
}
