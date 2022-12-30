import { Accordion, Group, Avatar, Text } from '@mantine/core';
import { data } from 'components/Resturant-Data/data';
import { data as menuData } from 'components/Menu-data/data';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart, MdStar } from "react-icons/md";
import MenuItem from 'components/Menu-Item';

function AccordionLabel({ title, image_url, description }) {
    return (
        <Group noWrap>
            <Avatar src={image_url} radius="xl" size="lg" />
            <div>
                <Text>{title}</Text>
                <Text size="sm" color="dimmed" weight={400}>
                    {description}
                </Text>
            </div>
        </Group>
    );
}

function Resturant() {
    const items = data.map((item) => (
        <Accordion.Item value={item.title} key={item.title}>
            <Accordion.Control>
                <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel>

                <MenuItem />
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return <Accordion chevronPosition="right" variant="contained">{items}</Accordion>;
}


export default Resturant;