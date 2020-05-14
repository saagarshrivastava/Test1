package com.mycompany.test1.repository.search;

import com.mycompany.test1.domain.MajorIncident;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link MajorIncident} entity.
 */
public interface MajorIncidentSearchRepository extends ElasticsearchRepository<MajorIncident, Long> {
}
