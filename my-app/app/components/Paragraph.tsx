"use client";
import Row from "@/node_modules/react-bootstrap/esm/Row";


interface ParagraphProps {
    text: string,
    value: string | number,
}

export const Paragraph = ({text, value}: ParagraphProps) => {
    return (
        <Row>
            <span className="font-weight-bold">{text} : </span><span>{value}</span>
        </Row>
    );
}