import Input from "../form/input"
import Select from "../form/select"
import Submit from "../form/submit"
import styles from "./ProjectForm.module.css"

function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input type={"text"} text={"Nome do projeto"} name={"name"} placeholder={"Insira o nome do projeto"} />
            <Input type={"number"} text={"Orçamento do projeto"} name={"budget"} placeholder={"Insira o orçamento total"} />
            <Select name={"Category_id"} text={"Selecione uma categoria"} />
            <Submit text={btnText} />
        </form>
    )
}

export default ProjectForm