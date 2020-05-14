package com.mycompany.test1.repository;

import com.mycompany.test1.domain.MajorIncident;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the MajorIncident entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MajorIncidentRepository extends JpaRepository<MajorIncident, Long> {
}
