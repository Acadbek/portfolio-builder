import React, { useState } from "react";
import TemplateCard from "../../components/TemplateCard/TemplateCard";
import FilterButton from "../../components/FilterButton/FilterButton";
import { useNavigate } from "react-router-dom";
import styles from "./ResumeTemplates.module.scss";

const templates = [
  {
    id: 1,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/wk78myowij2vvh1gy8l-s/2560.webp",
    description: "Multi-column resume with left sidebar",
    type: "Modern",
  },
  {
    id: 2,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/gs_qryrzly3kldmqhxqsb/2560.webp",
    description: "Multi-column resume with left sidebar",
    type: "Modern",
  },
  {
    id: 3,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/pgcuzlm0skbwabfnppg3b/2560.webp",
    description: "Multi-column resume with left sidebar",
    type: "Classic",
  },
  {
    id: 4,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/yrf-1jligslm-ta_zmyji/2560.webp",
    description: "Multi-column resume with left sidebar",
    type: "Professional",
  },
  {
    id: 5,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/cjy7ca_q8xpaocheef8v1/2560.webp",
    description: "Multi-column resume with left sidebar",
    type: "Creative",
  },
  {
    id: 6,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/free-multi-column-resume-template/1280.webp",
    description: "Multi-column resume with left sidebar",
    type: "Modern",
  },
  {
    id: 7,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/n9mmojn86lnm80lbjib2i/2560.webp",
    description: "Multi-column resume with left sidebar",
    type: "Professional",
  },
  {
    id: 8,
    title: "Atlantic Blue Multi-Column",
    img: "https://prod.flowcvassets.com/resume-templates/um2ccnj8x3bimdnzzrml8/2560.webp",
    description: "Multi-column resume with left sidebar",
    type: "Creative",
  },
];

const filters = [
  { label: "All Templates", value: "all" },
  { label: "Modern", value: "Modern" },
  { label: "Classic", value: "Classic" },
  { label: "Professional", value: "Professional" },
  { label: "Creative", value: "Creative" },
];

const ResumeTemplates = () => {
  const [active, setActive] = useState("all");
  const navigate = useNavigate();

  const filtered = active === "all"
    ? templates
    : templates.filter(t => t.type === active);

  const handleCardClick = (id) => {
    const template = filtered.find(tpl => tpl.id === id);
    navigate(`/template-details/${id}`, { state: { template } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Resume Templates</div>
      <div className={styles.hr} />
      <div className={styles.filters}>
        {filters.map(f => (
          <FilterButton
            key={f.value}
            active={active === f.value}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </FilterButton>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map((tpl) => (
          <TemplateCard
            key={tpl.id}
            img={tpl.img}
            onClick={() => handleCardClick(tpl.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates; 